import ValidacoesUsuario from "../services/ValidacoesUsuario.js";

test("Validar se o nome tem 3 caracteres ou mais", ()=>{
    expect(ValidacoesUsuario.validaNome("leo")).toBe(true)
})

test("Validar se o nome tem 3 caracteres ou mais", ()=>{
    expect(ValidacoesUsuario.validaNome("2")).toBe(true)
})