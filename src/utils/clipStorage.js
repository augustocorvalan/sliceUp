const SAVED_CLIPS_KEY = 'savedClips';

export const getClipsFromStorage = () => JSON.parse(localStorage.getItem(SAVED_CLIPS_KEY));
export const saveClipsToStorage = (clips) => localStorage.setItem(SAVED_CLIPS_KEY, JSON.stringify(clips));