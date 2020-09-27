export default {
  allElem: (selectors, parentNode = document) =>
    parentNode.querySelectorAll(selectors),
  elem: (selectors, parentNode = document) =>
    parentNode.querySelector(selectors),
  setDisp: (node, a) => {
    node.style.display = a;
  },
  addClass: (node, name) => node.classList.add(name),
  removeClass: (node, name) => node.classList.remove(name),
  toggleClass: (node, name) => node.classList.toggle(name),
  sendHttpRequest: async (url, reqMethod, data) => {
    const request = {
      method: reqMethod,
      headers: {
        Accept: 'application/json',
      },
      credentials: 'include',
    };
    if (data) {
      request.headers['Content-Type'] = 'application/json';
      request.body = JSON.stringify(data);
    }
    const response = await fetch(url, request);
    return response;
  },
};
