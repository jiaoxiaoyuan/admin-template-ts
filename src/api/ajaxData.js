import request from "./request";
import Message from "vue-m-message";

export function getHttp(apiRoute) {
  return new Promise((resolve, reject) => {
    let msg;
    // eslint-disable-next-line no-empty
    if (apiRoute.isload === false) {
    } else {
      msg = Message.loading({
        message: apiRoute.loadMsg ? apiRoute.loadMsg : "请求中",
        align: "center",
        duration: 5000,
        zIndex: 9999,
        showClose: false,
      });
    }
    request
      .get(apiRoute.url, {
        params: apiRoute.data,
      })
      .then((response) => {
        if (msg) {
          msg.close();
        }
        switch (response.data.code) {
          case 0:
            resolve(response.data);
            break;
          case 1:
            Message({
              message: response.data.msg,
              type: "Error",
              showClose: true,
              duration: 3000,
              zIndex: 9999,
              align: "center",
            });
            break;
          case 500:
            // eslint-disable-next-line no-console
            console.log("跳转到登陆");
            Message({
              message: "请求失败,请稍后再试",
              type: "error",
              showClose: false,
              duration: 3000,
              zIndex: 9999,
              align: "center",
            });
            break;
        }
      })
      .catch((error) => {
        if (msg) {
          msg.close();
        }
        Message({
          message: "请求失败,请稍后再试",
          type: "error",
          showClose: false,
          duration: 3000,
          zIndex: 9999,
          align: "center",
        });
        reject(error);
      });
  });
}
export function postHttp(apiRoute) {
  return new Promise((resolve, reject) => {
    let msg;
    // eslint-disable-next-line no-empty
    if (apiRoute.isload === false) {
    } else {
      msg = Message.loading({
        message: apiRoute.loadMsg ? apiRoute.loadMsg : "请求中",
        align: "center",
        showClose: false,
      });
    }
    request
      .post(apiRoute.url, apiRoute.data)
      .then((response) => {
        if (msg) {
          msg.close();
        }
        switch (response.data.code) {
          case 0:
            resolve(response.data);
            break;
          case 1:
            Message({
              message: response.data.msg,
              type: "error",
              showClose: true,
              duration: 3000,
              zIndex: 9999,
              align: "center",
            });
            break;
          case 500:
            console.log("请求失败,错误代码500");
            resolve(response.data);
            // Message({
            //   message: '请求失败,错误代码500',
            //   type: 'error',
            //   showClose: false,
            //   duration: 3000,
            //   zIndex: 9999,
            //   align: 'center'
            // })
            break;
        }
      })
      .catch((error) => {
        if (msg) {
          msg.close();
        }
        Message({
          message: "请求失败,请稍后再试",
          type: "error",
          showClose: false,
          duration: 3000,
          zIndex: 9999,
          align: "center",
        });
        reject(error);
      });
  });
}
export function putHttp(apiRoute) {
  return new Promise((resolve, reject) => {
    let msg;
    // eslint-disable-next-line no-empty
    if (apiRoute.isload === false) {
    } else {
      msg = Message.loading({
        message: apiRoute.loadMsg ? apiRoute.loadMsg : "请求中",
        align: "center",
        showClose: false,
      });
    }
    request
      .get(apiRoute.url, {
        params: apiRoute.data,
      })
      .then((response) => {
        if (msg) {
          msg.close();
        }
        switch (response.data.code) {
          case 0:
            resolve(response.data);
            break;
          case 1:
            Message({
              message: response.data.msg,
              type: "Error",
              showClose: true,
              duration: 3000,
              zIndex: 9999,
              align: "center",
            });
            break;
          case 500:
            // eslint-disable-next-line no-console
            console.log("跳转到登陆");
            Message({
              message: "请求失败,报错代码500",
              type: "error",
              showClose: false,
              duration: 3000,
              zIndex: 9999,
              align: "center",
            });
            break;
        }
      })
      .catch((error) => {
        if (msg) {
          msg.close();
        }
        Message({
          message: "请求失败,请稍后再试",
          type: "error",
          showClose: false,
          duration: 3000,
          zIndex: 9999,
          align: "center",
        });
        reject(error);
      });
  });
}
