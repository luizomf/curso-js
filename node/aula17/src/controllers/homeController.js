exports.paginaInicial = (req, res) => {
  res.render('index', {
    titulo: 'Este será o título da página',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  });
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
