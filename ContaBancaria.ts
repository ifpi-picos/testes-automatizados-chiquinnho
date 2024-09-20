export default class ContaBancaria {
    private numeroConta: number
    private agencia: number
    private saldo: number
    private extrato: string[]

    public constructor(){
        this.numeroConta = 0
        this.agencia = 0
        this.saldo = 0
        this.extrato = []
    }
    
    public depositar(valor: number) {
        if(valor > 0){
            this.saldo += valor
            this.extrato.push(`Deposito de R$ ${valor}`)
            this.registrarOperacao(`Valor depositado R$ ${valor}.`)
            return this.saldo

        } else {
            console.log('Valor inválido para deposito.')
        }
    }

    // Sò diminue se o valo for menor ou igual ao saldo

    public sacar(valor: number) {
        if (valor <= this.saldo && valor > 0) {
            this.saldo -= valor
            this.extrato.push(`Saque de R$${valor}.`)
            this.registrarOperacao(`O saque de R$ ${valor}.`)
            return this.saldo           
        } else {
            console.log(`Valor inválido para saque. Tá querendo me roubar!?`)
        }
    }

    public transferir(valor:number, contaDestino: ContaBancaria) {
        if (valor <= this.saldo && valor > 0) {
            this.saldo -= valor
            this.registrarOperacao(`Transferência de R$${valor}`)
            contaDestino.receberTransferencia(valor, this.numeroConta)
            return this.saldo
        } else {
            console.log(`Valor inválido para tranferência. Tá querendo me roubar!?`)
        }
    }

    public receberTransferencia(valor: number, contaOrigem: number) {
        this.saldo += valor;
        this.extrato.push(`Recebimento de transferência de R$ ${valor} da conta ${contaOrigem}`);
    }

    public consultarSaldo() {
        return this.saldo;
    }

    public exibirExtrato() {
        return this.extrato;
    }

    // Método privado para registrar cada operação no extrato da conta, incluindo a data e a descrição da transação.
    // acho que esse vai ter uma especie de login, porque é privado, com data, hora e descrição
    
    public registrarOperacao(descricao: string) {
        const dataAtual = new Date().toLocaleString()
        this.extrato.push(`${dataAtual} - ${descricao}`)

    }
}
