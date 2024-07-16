chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({
    blurStories: false,
    blurPosts: false,
    blurMessages: false,
    blurProfilePhotos: false,
    blurProfilePhotosMessages: false,
    blurComments: false,
    blurMessagesOnChat: false,
    blurMessagesOnChatbox: false
  });
});


