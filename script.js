function calcularAreaTriangulo() {
  const base = parseFloat(prompt("Informe a base do triângulo:"))
  const altura = parseFloat(prompt("Informe a altura do triângulo:"))
  return base * altura / 2
}

function calcularAreaRetangulo() {
    const base = parseFloat(prompt("Informe a base do retângulo:"))
    const altura = parseFloat(prompt("Informe a altura do retângulo:"))
    return base * altura
  }

  function calcularAreaQuadrado() {
    const lado = parseFloat(prompt("Informe a área do quadrado:"))
    return lado * lado
  }

  function calcularAreaTrapezio() {
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
    const altura = parseFloat(prompt("Informe a altura do trapézio:"))
    return (baseMaior + baseMenor) * altura / 2
  }

  function calcularAreaCirculo() {
    const raio = parseFloat(prompt("Informe o raio do círculo:"))
    return (3.14 * raio * raio)
  }

  function exibirMenu() {
    return prompt(
      "Calculadora Geométrica:\n" +
      "1. Calcular área de triângulo\n" +
      "2. Calcular área de retângulo\n" +
      "3. Calcular área de quadrado\n" +
      "4. Calcular área de trapézio\n" +
      "5. Calcular área de círculo\n" +
      "6. Operações Matemáticas\n" +
      "7. Sair\n"
    )
  }

  function executar() {
    let opcao = ""
  
    do {
      opcao = exibirMenu()
      let resultado
  
      switch (opcao) {
        case "1":
          resultado = calcularAreaTriangulo()
          break
        case "2":
          resultado = calcularAreaRetangulo()
          break
        case "3":
          resultado = calcularAreaQuadrado()
          break
        case "4":
          resultado = calcularAreaTrapezio()
          break
        case "5":
          resultado = calcularAreaCirculo()
          break
         case"6":
         let resultado1 = prompt("Qual operação matemática você deseja?" +
            "\n1. Soma" + "\n2. Subtração" + "\n3. Multiplicação" + "\n4. Divisão"
         )
         switch(resultado1){
            case "1":
                let soma1 = parseFloat(prompt("Informe o primeiro número:"))
                let soma2 = parseFloat(prompt("Informe o segundo número:"))
                alert("O resultado da soma é: " + (soma1 + soma2))
                break

                case "2":
                let subtracao1 = parseFloat(prompt("Informe o primeiro número:"))
                let subtracao2 = parseFloat(prompt("Informe o segundo número:"))
                alert("O resultado da subtração é: " + (subtracao1 - subtracao2))
                break

                case "3":
                let multiplicacao1 = parseFloat(prompt("Informe o primeiro número:"))
                let multiplicacao2 = parseFloat(prompt("Informe o segundo número:"))
                alert("O resultado da multiplicação é: " + (multiplicacao1 * multiplicacao2))
                break

                case "4":
                let divisao1 = parseFloat(prompt("Informe o primeiro número:"))
                let divisao2 = parseFloat(prompt("Informe o segundo número:"))
                alert("O resultado da divisão é: " + (divisao1 / divisao2))
                break
            
            
            
         }

      break
        case "7":
          alert("Saindo...")
          break
        default:
          alert("Opção inválida!")
          break
      }
  
      if (resultado) {
        alert("Resultado: " + resultado)
      }
  
    } while (opcao !== "7");
  }

  executar()