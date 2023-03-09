// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement('li'); // li 요소 생성
  li.className = 'discussion__container'; // 클래스 이름 지정

  const likeBtnWrapper = document.createElement('div');
  likeBtnWrapper.className = 'discussion__like';
  const avatarWrapper = document.createElement('div');
  avatarWrapper.className = 'discussion__avatar--wrapper';
  const discussionContent = document.createElement('div');
  discussionContent.className = 'discussion__content';
  const discussionAnswered = document.createElement('div');
  discussionAnswered.className = 'discussion__answered';

  const discussionContents = document.createElement('div');

  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.
  likeBtnWrapper.innerHTML = `
  <button>좋아요</button>
  <span>0</span>
  `;
  avatarWrapper.innerHTML = `
  <img class="discussion__avatar--image"
  src="${obj.avatarUrl}"
  alt="avatar">
  `;

  discussionContent.innerHTML = `
  <h2 class="discussion__title"><a href="${obj.url}">${obj.title}</a></h2>
  <div class="discussion__information">${obj.author} / ${obj.createdAt}</div>
  `;

  discussionAnswered.innerHTML = answerButton(obj);

  discussionContents.innerHTML = `
    ${obj.bodyHTML};
  `;

  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// 답변 여부의 따라 버튼의 컴포넌트를 렌더링 합니다.
const answerButton = ({ answer }) => {
  return `
    <div class="discussion__answered--state">
    <span class="elipse" style="${
      answer !== null ? '' : 'background-color:red'
    }"></span>
    <span class="text">${answer !== null ? '답변완료' : '미답변'}</span>
  </div>
  `;
};

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return element;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector('ul.discussions__container');
render(ul);
