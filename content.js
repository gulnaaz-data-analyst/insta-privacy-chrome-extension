function blurUsernames(blurStories, blurPosts, blurMessages) {
  const storyUsernameClasses = [
    "x9f619 x1lliihq x6ikm8r x10wlt62 x1n2onr6 x2b8uid xlyipyv xuxw1ft x1yf5rgg xhikscq xg83lxy x1h0ha7o"
  ];

  const postUsernameClasses = [
    "_ap3a _aaco _aacw _aacx _aad7 _aade"
  ];

  const messageUsernameClasses = [
    "x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft"
  ];

  function applyBlur(classNames, shouldBlur) {
    const elements = document.querySelectorAll(`.${classNames.split(' ').join('.')}`);
    elements.forEach(element => {
      element.style.filter = shouldBlur ? 'blur(5px)' : 'none';
    });
  }

  storyUsernameClasses.forEach(classNames => applyBlur(classNames, blurStories));
  postUsernameClasses.forEach(classNames => applyBlur(classNames, blurPosts));
  messageUsernameClasses.forEach(classNames => applyBlur(classNames, blurMessages));

  // Observe changes in the DOM to apply the blur effect to dynamically loaded content
  const observer = new MutationObserver(() => {
    storyUsernameClasses.forEach(classNames => applyBlur(classNames, blurStories));
    postUsernameClasses.forEach(classNames => applyBlur(classNames, blurPosts));
    messageUsernameClasses.forEach(classNames => applyBlur(classNames, blurMessages));
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

function blurProfilePhotos(blurProfilePhotos) {
  const profilePhotoClasses = [
    "xpdipgo x972fbf xcfux6l x1qhh985 xm0m39n xk390pu x5yr21d xdj266r x11i5rnm xat24cr x1mh8g0r xl1xv1r xexx8yu x4uap5 x18d9i69 xkhd6sd x11njtxf xh8yej3"
  ];

  function applyBlur(classNames, shouldBlur) {
    const elements = document.querySelectorAll(`.${classNames.split(' ').join('.')}`);
    elements.forEach(element => {
      element.style.filter = shouldBlur ? 'blur(5px)' : 'none';
    });
  }

  profilePhotoClasses.forEach(classNames => applyBlur(classNames, blurProfilePhotos));

  // Observe changes in the DOM to apply the blur effect to dynamically loaded content
  const observer = new MutationObserver(() => {
    profilePhotoClasses.forEach(classNames => applyBlur(classNames, blurProfilePhotos));
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

function blurProfilePhotosMessages(blurProfilePhotosMessages) {
  const profilePhotoMessageClasses = [
    "x5yr21d xl1xv1r xh8yej3"
  ];

  function applyBlur(classNames, shouldBlur) {
    const elements = document.querySelectorAll(`.${classNames.split(' ').join('.')}`);
    elements.forEach(element => {
      element.style.filter = shouldBlur ? 'blur(5px)' : 'none';
    });
  }

  profilePhotoMessageClasses.forEach(classNames => applyBlur(classNames, blurProfilePhotosMessages));

  // Observe changes in the DOM to apply the blur effect to dynamically loaded content
  const observer = new MutationObserver(() => {
    profilePhotoMessageClasses.forEach(classNames => applyBlur(classNames, blurProfilePhotosMessages));
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

function blurComments(blurComments) {
  const commentsClasses = [
    "_ap3a _aaco _aacu _aacx _aad7 _aade"
  ];

  function applyBlur(classNames, shouldBlur) {
    const elements = document.querySelectorAll(`.${classNames.split(' ').join('.')}`);
    elements.forEach(element => {
      element.style.filter = shouldBlur ? 'blur(5px)' : 'none';
    });
  }

  commentsClasses.forEach(classNames => applyBlur(classNames, blurComments));

  // Observe changes in the DOM to apply the blur effect to dynamically loaded content
  const observer = new MutationObserver(() => {
    commentsClasses.forEach(classNames => applyBlur(classNames, blurComments));
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

function blurMessagesOnChat(blurMessagesOnChat) {
  const messagesOnChatClasses = [
    "html-div xe8uvvx xexx8yu x4uap5 x18d9i69 xkhd6sd x1gslohp x11i5rnm x12nagc x1mh8g0r x1yc453h x126k92a xyk4ms5"
  ];

  function applyBlur(classNames, shouldBlur) {
    const elements = document.querySelectorAll(`.${classNames.split(' ').join('.')}`);
    elements.forEach(element => {
      element.style.filter = shouldBlur ? 'blur(5px)' : 'none';
    });
  }

  messagesOnChatClasses.forEach(classNames => applyBlur(classNames, blurMessagesOnChat));

  // Observe changes in the DOM to apply the blur effect to dynamically loaded content
  const observer = new MutationObserver(() => {
    messagesOnChatClasses.forEach(classNames => applyBlur(classNames, blurMessagesOnChat));
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

function blurMessagesOnChatbox(blurMessagesOnChatbox) {
  const messagesOnChatboxClasses = [
    "x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft"
  ];

  function applyBlur(classNames, shouldBlur) {
    const elements = document.querySelectorAll(`.${classNames.split(' ').join('.')}`);
    elements.forEach(element => {
      element.style.filter = shouldBlur ? 'blur(5px)' : 'none';
    });
  }

  messagesOnChatboxClasses.forEach(classNames => applyBlur(classNames, blurMessagesOnChatbox));

  // Observe changes in the DOM to apply the blur effect to dynamically loaded content
  const observer = new MutationObserver(() => {
    messagesOnChatboxClasses.forEach(classNames => applyBlur(classNames, blurMessagesOnChatbox));
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Listen for changes to the storage and update the blurring effects
chrome.storage.sync.get([
  'blurStories',
  'blurPosts',
  'blurMessages',
  'blurProfilePhotos',
  'blurProfilePhotosMessages',
  'blurComments',
  'blurMessagesOnChat',
  'blurMessagesOnChatbox'
], data => {
  blurUsernames(
    data.blurStories,
    data.blurPosts,
    data.blurMessages
  );
  
  blurProfilePhotos(data.blurProfilePhotos);
  blurProfilePhotosMessages(data.blurProfilePhotosMessages);
  blurComments(data.blurComments);
  blurMessagesOnChat(data.blurMessagesOnChat);
  blurMessagesOnChatbox(data.blurMessagesOnChatbox);
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (changes.blurStories ||
      changes.blurPosts ||
      changes.blurMessages) {
    
    chrome.storage.sync.get([
      'blurStories',
      'blurPosts',
      'blurMessages'
    ], data => {
      blurUsernames(
        data.blurStories,
        data.blurPosts,
        data.blurMessages
      );
    });
  }

  if (changes.blurProfilePhotos) {
    chrome.storage.sync.get('blurProfilePhotos', data => {
      blurProfilePhotos(data.blurProfilePhotos);
    });
  }

  if (changes.blurProfilePhotosMessages) {
    chrome.storage.sync.get('blurProfilePhotosMessages', data => {
      blurProfilePhotosMessages(data.blurProfilePhotosMessages);
    });
  }

  if (changes.blurComments) {
    chrome.storage.sync.get('blurComments', data => {
      blurComments(data.blurComments);
    });
  }

  if (changes.blurMessagesOnChat) {
    chrome.storage.sync.get('blurMessagesOnChat', data => {
      blurMessagesOnChat(data.blurMessagesOnChat);
    });
  }

  if (changes.blurMessagesOnChatbox) {
    chrome.storage.sync.get('blurMessagesOnChatbox', data => {
      blurMessagesOnChatbox(data.blurMessagesOnChatbox);
    });
  }
});
