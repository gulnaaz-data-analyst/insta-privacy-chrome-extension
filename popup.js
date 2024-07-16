document.addEventListener('DOMContentLoaded', function() {
  const blurStoriesCheckbox = document.getElementById('blurStories');
  const blurPostsCheckbox = document.getElementById('blurPosts');
  const blurMessagesCheckbox = document.getElementById('blurMessages');
  const blurProfilePhotosCheckbox = document.getElementById('blurProfilePhotos');
  const blurProfilePhotosMessagesCheckbox = document.getElementById('blurProfilePhotosMessages');
  const blurCommentsCheckbox = document.getElementById('blurComments');
  const blurMessagesOnChatCheckbox = document.getElementById('blurMessagesOnChat');
  const blurMessagesOnChatboxCheckbox = document.getElementById('blurMessagesOnChatbox');

  chrome.storage.sync.get([
    'blurStories',
    'blurPosts',
    'blurMessages',
    'blurProfilePhotos',
    'blurProfilePhotosMessages',
    'blurComments',
    'blurMessagesOnChat',
    'blurMessagesOnChatbox'
  ], function(data) {
    blurStoriesCheckbox.checked = data.blurStories;
    blurPostsCheckbox.checked = data.blurPosts;
    blurMessagesCheckbox.checked = data.blurMessages;
    blurProfilePhotosCheckbox.checked = data.blurProfilePhotos;
    blurProfilePhotosMessagesCheckbox.checked = data.blurProfilePhotosMessages;
    blurCommentsCheckbox.checked = data.blurComments;
    blurMessagesOnChatCheckbox.checked = data.blurMessagesOnChat;
    blurMessagesOnChatboxCheckbox.checked = data.blurMessagesOnChatbox;
  });

  blurStoriesCheckbox.addEventListener('change', function() {
    chrome.storage.sync.set({ blurStories: blurStoriesCheckbox.checked });
  });

  blurPostsCheckbox.addEventListener('change', function() {
    chrome.storage.sync.set({ blurPosts: blurPostsCheckbox.checked });
  });

  blurMessagesCheckbox.addEventListener('change', function() {
    chrome.storage.sync.set({ blurMessages: blurMessagesCheckbox.checked });
  });

  blurProfilePhotosCheckbox.addEventListener('change', function() {
    chrome.storage.sync.set({ blurProfilePhotos: blurProfilePhotosCheckbox.checked });
  });

  blurProfilePhotosMessagesCheckbox.addEventListener('change', function() {
    chrome.storage.sync.set({ blurProfilePhotosMessages: blurProfilePhotosMessagesCheckbox.checked });
  });

  blurCommentsCheckbox.addEventListener('change', function() {
    chrome.storage.sync.set({ blurComments: blurCommentsCheckbox.checked });
  });

  blurMessagesOnChatCheckbox.addEventListener('change', function() {
    chrome.storage.sync.set({ blurMessagesOnChat: blurMessagesOnChatCheckbox.checked });
  });

  blurMessagesOnChatboxCheckbox.addEventListener('change', function() {
    chrome.storage.sync.set({ blurMessagesOnChatbox: blurMessagesOnChatboxCheckbox.checked });
  });
});
