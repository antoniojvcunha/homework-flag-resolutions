// Format text

// Choose a simple Ascii art from the website https://www.asciiart.eu/.
// Output it to the console.

// ￼        _______
//        //  ||\ \
//  _____//___||_\ \___
//  )  _          _    \
//  |_/ \________/ \___|
// ___\_/________\_/______

fetch('exercise_2\text\bipbip.txt')
  .then(response => response.text())
  .then(text => {
    const lines = text.split("\n");
    console.log(lines); // Exibe o conteúdo do arquivo dividido por linhas
  })
  .catch(error => console.error('Erro ao carregar o arquivo:', error));