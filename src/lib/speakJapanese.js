function pickJapaneseVoice(voices) {
  const ja = voices.filter((voice) => voice.lang?.toLowerCase().startsWith("ja"));
  if (!ja.length) return null;

  const preferred = ja.find((voice) =>
    /google|kyoko|otoya|haruka|ichiro|sayaka|japanese/i.test(voice.name),
  );
  return preferred || ja[0];
}

export function speakJapanese(text, { onStart, onEnd, onError } = {}) {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    onError?.(new Error("Speech is not supported on this device."));
    return () => {};
  }

  const synth = window.speechSynthesis;
  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  utterance.rate = 0.92;
  utterance.pitch = 1;

  const applyVoice = () => {
    const voice = pickJapaneseVoice(synth.getVoices());
    if (voice) utterance.voice = voice;
  };

  applyVoice();
  if (!utterance.voice) {
    const onVoices = () => {
      applyVoice();
      synth.removeEventListener("voiceschanged", onVoices);
    };
    synth.addEventListener("voiceschanged", onVoices);
  }

  utterance.onstart = () => onStart?.();
  utterance.onend = () => onEnd?.();
  utterance.onerror = (event) => {
    if (event.error === "interrupted" || event.error === "canceled") {
      onEnd?.();
      return;
    }
    onError?.(event);
    onEnd?.();
  };

  // Some browsers need a tick after cancel before speaking again.
  window.setTimeout(() => synth.speak(utterance), 40);

  return () => {
    synth.cancel();
  };
}

export function stopSpeaking() {
  if (typeof window !== "undefined" && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}
