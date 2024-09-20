import { beforeEach, describe, expect, test } from "bun:test";
import ContaBancaria from "./ContaBancaria.ts";


describe('ContaBancaria', () => {
    let conta: ContaBancaria;
    let conta2: ContaBancaria
    let senha: ContaBancaria
    beforeEach(() => {
        conta = new ContaBancaria();
        conta2 = new ContaBancaria();
        senha = new ContaBancaria();
    })

    test("Testando depositar", () => {
        conta.depositar(500)
        expect(conta.depositar(500)).toBe(1000);
    })

    test('Testando saque', () => {
        conta.depositar(400)
        expect(conta.sacar(400)).toBe(0)
    })

    test('Testando transferirir.', () => {
        conta.depositar(20) 
        expect(conta.transferir(5, conta2)).toBe(15)
        expect(conta2.transferir(5, conta)).toBe(0)
        expect(conta.transferir(20, conta2)).toBe(0)
        expect(conta2.transferir(20, conta)).toBe(0)
    })

    test('Exibindo Extrato', () => {
        conta.exibirExtrato()
        conta2.exibirExtrato()
    })

    test('Exibindo registros', () => {
        conta.depositar(200)
        expect(conta.registrarOperacao(""))
    })
})

