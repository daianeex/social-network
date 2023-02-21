/*
  * @jest-environment jsdom
 */
import login from "../src/js/pages/login.js";
import { loginUser, loginWithGoogle } from "../src/lib/authentication.js";

jest.mock("../src/lib/export.js");
jest.mock("../src/lib/authentication.js");

describe("É uma função", () => {
  it("loginUser", () => {
    expect(typeof loginUser).toBe("function");
  });
  it("loginWithGoogle", () => {
    expect(typeof loginWithGoogle).toBe("function");
  });
});

describe("loginUser", () => {
  it("Se o usuário for válido, deve logar com email e senha", () => {
    loginUser.mockResolvedValueOnce();
    const page = login();
    const email = page.querySelector("#user-email");
    const password = page.querySelector("#user-password");
    const btnLogin = page.querySelector("#btnLogin");

    email.value = "teste@teste.com";
    password.value = "123456";
    btnLogin.dispatchEvent(new Event("click"));
    expect(loginUser).toHaveBeenCalledTimes(email, password);
  });
  it("Se o email não for validado, deve mostrar o erro na tela", () => {
    loginUser.mockResolvedValueOnce();
    const page = login();
    const email = page.querySelector("#user-email");
    const password = page.querySelector("#user-password");
    const btnLogin = page.querySelector("#btnLogin");

    email.value = "teste@te";
    password.value = "123456";
    btnLogin.dispatchEvent(new Event("click"));
    expect(loginUser).toHaveBeenCalledTimes(email, password);
  });
  it("Se todos os campos estiverem vazio, deve mostrar o erro na tela", () => {
    loginUser.mockResolvedValueOnce();
    const page = login();
    const email = page.querySelector("#user-email");
    const password = page.querySelector("#user-password");
    const btnLogin = page.querySelector("#btnLogin");

    email.value = "teste@te";
    password.value = "123456";
    btnLogin.dispatchEvent(new Event("click"));
    expect(loginUser).toHaveBeenCalledTimes(email, password);
  });
});

describe("loginWithGoogle", () => {
  it("Se o usuário for válido, deve logar com a conta do Google", () => {
    loginWithGoogle.mockResolvedValueOnce();
    const page = login();
    const btnGoogle = page.querySelector("#btnGoogle");
    btnGoogle.dispatchEvent(new Event("click"));
    expect(loginWithGoogle).toHaveBeenCalledTimes(1);
  });
});