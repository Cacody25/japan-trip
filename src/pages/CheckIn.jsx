import React, { useEffect, useRef, useState } from "react";
import { Camera, ImagePlus, Lock, Trash2, Unlock, X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import {
  MAX_PHOTOS,
  createCheckIn,
  filesToPhotoDataUrls,
  isCommentCodeValid,
  loadCheckIns,
  saveCheckIns,
} from "@/lib/checkIns";
import { cn } from "@/lib/utils";

const CODE_SESSION_KEY = "japan-trip-checkin-unlocked";

export default function CheckIn() {
  const [checkIns, setCheckIns] = useState(() => loadCheckIns());
  const [title, setTitle] = useState("");
  const [photos, setPhotos] = useState([]);
  const [comment, setComment] = useState("");
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(CODE_SESSION_KEY) === "1");
  const [codeError, setCodeError] = useState("");
  const [busy, setBusy] = useState(false);
  const [formError, setFormError] = useState("");
  const [lightbox, setLightbox] = useState(null);
  const fileRef = useRef(null);

  useEffect(() => {
    saveCheckIns(checkIns);
  }, [checkIns]);

  function unlockComments() {
    if (!isCommentCodeValid(code)) {
      setCodeError("Wrong code.");
      return;
    }
    setUnlocked(true);
    setCodeError("");
    setCode("");
    sessionStorage.setItem(CODE_SESSION_KEY, "1");
  }

  async function onPickPhotos(event) {
    const files = event.target.files;
    if (!files?.length) return;
    setBusy(true);
    setFormError("");
    try {
      const next = await filesToPhotoDataUrls(files);
      setPhotos((prev) => [...prev, ...next].slice(0, MAX_PHOTOS));
    } catch {
      setFormError("Could not read one of those photos. Try another image.");
    } finally {
      setBusy(false);
      event.target.value = "";
    }
  }

  function removeDraftPhoto(index) {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  }

  function onSubmit(event) {
    event.preventDefault();
    setFormError("");
    if (!title.trim()) {
      setFormError("Add a title for this spot.");
      return;
    }
    if (!photos.length) {
      setFormError("Add at least one photo.");
      return;
    }
    if (comment.trim() && !unlocked) {
      setFormError("Enter the code to unlock comments first.");
      return;
    }

    const entry = createCheckIn({
      title,
      photos,
      comment: unlocked ? comment : "",
    });
    setCheckIns((prev) => [entry, ...prev]);
    setTitle("");
    setPhotos([]);
    setComment("");
  }

  function deleteCheckIn(id) {
    setCheckIns((prev) => prev.filter((entry) => entry.id !== id));
  }

  return (
    <>
      <SectionHeading
        eyebrow="On the ground"
        title="Check In!"
        subtitle="Drop photos of a spot, give it a title, and unlock comments with your code. Saved on this device only."
      />

      <div className="space-y-8 px-5 pt-8 md:px-8">
        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-white/[0.07] bg-card/60 p-5 md:p-6"
        >
          <label className="block">
            <span className="text-[10.5px] uppercase tracking-[0.22em] text-gold">Title</span>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Where are you?"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground/60 focus:border-vermilion/50 focus:outline-none"
            />
          </label>

          <div className="mt-5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[10.5px] uppercase tracking-[0.22em] text-gold">Photos</span>
              <span className="text-[11px] text-muted-foreground">
                {photos.length}/{MAX_PHOTOS}
              </span>
            </div>

            {photos.length ? (
              <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
                {photos.map((src, index) => (
                  <div key={`${src.slice(0, 24)}-${index}`} className="relative aspect-square overflow-hidden rounded-xl border border-white/10">
                    <img src={src} alt="" className="h-full w-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeDraftPhoto(index)}
                      className="absolute right-1.5 top-1.5 rounded-full bg-black/70 p-1 text-white"
                      aria-label="Remove photo"
                    >
                      <X className="h-3 w-3" strokeWidth={2} />
                    </button>
                  </div>
                ))}
              </div>
            ) : null}

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              multiple
              capture="environment"
              className="hidden"
              onChange={onPickPhotos}
            />
            <button
              type="button"
              disabled={busy || photos.length >= MAX_PHOTOS}
              onClick={() => fileRef.current?.click()}
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40"
            >
              <ImagePlus className="h-3.5 w-3.5" strokeWidth={1.7} />
              {busy ? "Processing…" : "Add photos"}
            </button>
          </div>

          <div className="mt-6 rounded-2xl border border-white/[0.07] bg-black/20 p-4">
            <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] text-gold">
              {unlocked ? <Unlock className="h-3.5 w-3.5" strokeWidth={1.7} /> : <Lock className="h-3.5 w-3.5" strokeWidth={1.7} />}
              Comment
            </div>

            {unlocked ? (
              <textarea
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                rows={3}
                placeholder="A note about this spot…"
                className="mt-3 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground/60 focus:border-vermilion/50 focus:outline-none"
              />
            ) : (
              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
                <input
                  type="password"
                  inputMode="numeric"
                  autoComplete="off"
                  value={code}
                  onChange={(event) => {
                    setCode(event.target.value);
                    setCodeError("");
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      unlockComments();
                    }
                  }}
                  placeholder="Enter code to unlock"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground/60 focus:border-vermilion/50 focus:outline-none sm:max-w-[220px]"
                />
                <button
                  type="button"
                  onClick={unlockComments}
                  className="shrink-0 rounded-full border border-vermilion/40 bg-vermilion/15 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-foreground"
                >
                  Unlock
                </button>
              </div>
            )}
            {codeError ? <p className="mt-2 text-[12px] text-vermilion">{codeError}</p> : null}
          </div>

          {formError ? <p className="mt-4 text-[12.5px] text-vermilion">{formError}</p> : null}

          <button
            type="submit"
            disabled={busy}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-vermilion/50 bg-vermilion/20 px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-vermilion/30 disabled:opacity-40"
          >
            <Camera className="h-3.5 w-3.5" strokeWidth={1.7} />
            Check in
          </button>
        </form>

        <div className="space-y-4 pb-4">
          <p className="text-[10.5px] uppercase tracking-[0.22em] text-gold">
            {checkIns.length ? `${checkIns.length} check-in${checkIns.length === 1 ? "" : "s"}` : "No check-ins yet"}
          </p>

          {checkIns.map((entry) => (
            <article key={entry.id} className="overflow-hidden rounded-3xl border border-white/[0.07] bg-card/60">
              <div className={cn("grid gap-1", entry.photos.length > 1 ? "grid-cols-2" : "grid-cols-1")}>
                {entry.photos.map((src, index) => (
                  <button
                    key={`${entry.id}-${index}`}
                    type="button"
                    onClick={() => setLightbox({ photos: entry.photos, index })}
                    className={cn(
                      "relative overflow-hidden bg-black/40",
                      entry.photos.length === 1 ? "aspect-[4/3]" : "aspect-square",
                      entry.photos.length === 3 && index === 0 ? "col-span-2 aspect-[2/1]" : null,
                    )}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-[20px] leading-snug text-foreground">{entry.title}</h2>
                    <p className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      {new Date(entry.createdAt).toLocaleString(undefined, {
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => deleteCheckIn(entry.id)}
                    className="rounded-full border border-white/10 p-2 text-muted-foreground hover:text-vermilion"
                    aria-label="Delete check-in"
                  >
                    <Trash2 className="h-3.5 w-3.5" strokeWidth={1.7} />
                  </button>
                </div>
                {entry.comment ? (
                  <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{entry.comment}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>

      {lightbox ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full border border-white/20 p-2 text-white"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
          <img
            src={lightbox.photos[lightbox.index]}
            alt=""
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}
