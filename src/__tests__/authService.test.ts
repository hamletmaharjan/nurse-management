import { getAccessToken, setAccessToken, getUserInfo, clearLocalAuth } from "../services/authService";

jest.mock("react", () => ({
  html: jest.fn(),
}));

const localStorageMock = (function () {
  type Store = {
    [key: string]: string;
  };

  let store: Store = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    setAccessToken(value: string) {
      window.localStorage.setItem("token", value);
      setAccessToken(value);
      store["token"] = value;
    },

    getAccessToken() {
      window.localStorage.getItem("token");
      store["token"] = getAccessToken() || "";

      return store["token"];
    },

    getUserInfo() {
      window.localStorage.getItem("user");
      store["user"] = getUserInfo() || {};
      return store["user"];
    },

    clearLocalAuth() {
      window.localStorage.removeItem('user');
      window.localStorage.removeItem('token');

      clearLocalAuth();

      delete store['user'];
      delete store['token'];
    },

    removeItem(key: string) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("setAccessToken", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("should set the access token", () => {
    //Act
    const token = "abcde";
    const expectedOutput = "abcde";

    //Assert
    localStorage.setAccessToken(token);

    //Arrange
    expect(localStorage.getItem("token")).toEqual(expectedOutput);
  });

  test("should return empty string when there's no access token", () => {
    //Assert
    const accessToken = localStorage.getAccessToken();

    //Arrange
    expect(accessToken).toEqual("");
  });

  test("should return empty string when there's no user info", () => {
    //Assert
    const accessToken = localStorage.getUserInfo();

    //Arrange
    expect(accessToken).toEqual({});
  });

  test("should remove the auth info", () => {
    localStorage.clearLocalAuth();

    const accessToken = localStorage.getAccessToken();
    const userInfo = localStorage.getUserInfo();

    expect(accessToken).toEqual("");
    expect(userInfo).toEqual({});
  });
});
