const STORAGE_KEY = "japan-trip-check-ins-v1";
const COMMENT_CODE = "1337";
const MAX_PHOTOS = 6;
const MAX_EDGE = 1280;
const JPEG_QUALITY = 0.72;

export function isCommentCodeValid(code) {
  return String(code ?? "").trim() === COMMENT_CODE;
}

export function loadCheckIns() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveCheckIns(checkIns) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(checkIns));
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error ?? new Error("Could not read file"));
    reader.readAsDataURL(file);
  });
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Could not load image"));
    image.src = src;
  });
}

/** Resize / compress a File into a JPEG data URL for localStorage. */
export async function compressImageFile(file) {
  const dataUrl = await readFileAsDataUrl(file);
  const image = await loadImage(dataUrl);
  const scale = Math.min(1, MAX_EDGE / Math.max(image.width, image.height));
  const width = Math.max(1, Math.round(image.width * scale));
  const height = Math.max(1, Math.round(image.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas unavailable");
  ctx.drawImage(image, 0, 0, width, height);
  return canvas.toDataURL("image/jpeg", JPEG_QUALITY);
}

export async function filesToPhotoDataUrls(fileList) {
  const files = [...fileList].filter((file) => file.type.startsWith("image/")).slice(0, MAX_PHOTOS);
  const photos = [];
  for (const file of files) {
    photos.push(await compressImageFile(file));
  }
  return photos;
}

export function createCheckIn({ title, photos, comment }) {
  return {
    id: `checkin-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title: title.trim(),
    photos,
    comment: comment?.trim() || "",
    createdAt: new Date().toISOString(),
  };
}

export { MAX_PHOTOS };
