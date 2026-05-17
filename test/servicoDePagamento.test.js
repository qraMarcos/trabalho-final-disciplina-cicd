import ServicoDePagamento from "../src/servicoDePagamento.js";
import assert from 'node:assert'

describe('Classe de Serviço de Pagamento', () => {
    it('Validar que o pagamento é adicionado com categoria "cara" ', () => {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('1111-2222-3333', 'EmpresaUm', 156.87);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, '1111-2222-3333');
        assert.equal(ultimoPagamento.empresa, 'EmpresaUm');
        assert.equal(ultimoPagamento.valor, 156.87);
        assert.equal(ultimoPagamento.categoria, 'cara');
    });

    it('Validar que o pagamento é adicionado com categoria "padrão"', () => {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('1111-2222-3333', 'EmpresaDois', 50.00);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, '1111-2222-3333');
        assert.equal(ultimoPagamento.empresa, 'EmpresaDois');
        assert.equal(ultimoPagamento.valor, 50.00);
        assert.equal(ultimoPagamento.categoria, 'padrão');
    });

    //Insiro dois pagamentos e valido o último
    it('Validar que retorna apenas o último pagamento realizado', () => {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('1111-2222-3333', 'EmpresaTres', 20);
        servicoDePagamento.pagar('1111-2222-3333', 'EmpresaQuatro', 200);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, '1111-2222-3333');
        assert.equal(ultimoPagamento.empresa, 'EmpresaQuatro');
        assert.equal(ultimoPagamento.valor, 200);
        assert.equal(ultimoPagamento.categoria, 'cara');
    });

    // Se o valor for igual a zero
    it('Validar que lança erro quando o valor do pagamento for igual a zero', () => {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act + Assert
        assert.throws(
            () => { servicoDePagamento.pagar('1111-2222-3333', 'Empresa Inválida', 0); },
            {
                message: 'O valor do pagamento deve ser maior que zero'
            });
    });

    // Não foi pedido mas estou validando também um valor nulo.
    it('Validar que lança erro quando o valor do pagamento for menor ou igual a zero', () => {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act + Assert
        assert.throws(() => { servicoDePagamento.pagar('1111-2222-3333', 'Empresa Inválida', null); }, 
        {
            message: 'O valor do pagamento deve ser maior que zero'
        });
    });
});