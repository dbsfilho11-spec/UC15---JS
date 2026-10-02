const perguntas = [
	{
		titulo: "Qual seu estilo de filme?",
		opcoes: ["Ação", "Terror", "Mistério", "Romance", "Comédia", "Anime / animação"]
	},
	{
		titulo: "Como você vai assistir hoje?",
		opcoes: ["Sozinho(a), curtindo meu momento", "Com alguém especial", "Com amigos ou família"]
	},
	{
		titulo: "Que clima combina com a sua noite?",
		opcoes: ["Suspense e mistério", "Romance e emoção", "Leveza e boas risadas", "Aventura e adrenalina"]
	},
	{
		titulo: "O que você quer sentir durante o filme?",
		opcoes: ["Ficar tentando desvendar tudo", "Me emocionar com uma história", "Desligar a cabeça e relaxar", "Ficar na ponta do sofá"]
	},
	{
		titulo: "Qual cenário parece mais interessante hoje?",
		opcoes: ["Uma investigação cheia de pistas", "Um encontro inesperado", "Uma viagem para outro mundo", "Uma situação divertida do dia a dia"]
	}
];

const catalogo = [
	{
		id: "filme-acao",
		titulo: "Filme 6",
		categoria: "Ação",
		imagem: "WhatsApp Image 2026-10-02 at 6.05.47 PM (1).jpeg",
		descricao: "Uma aventura cheia de acontecimentos e emoção.",
		tags: ["acao", "aventura", "adrenalina"]
	},
	{
		id: "uma-musume",
		titulo: "Uma Musume: Pretty Derby — Beginning of a New Era",
		categoria: "Anime",
		imagem: "Uma Musume Pretty Derby_ Beginning of a New Era___.jpg",
		descricao: "Jungle Pocket entra na escola Tracen em busca de ser a melhor, entre amizades e rivalidades.",
		tags: ["anime", "aventura", "emocao", "drama"]
	},
	{
		id: "interstellar",
		titulo: "Interstellar",
		categoria: "Ficção científica",
		imagem: "Interstellar.jpg",
		descricao: "Uma equipe viaja pelo espaço em busca de um novo lugar habitável para a humanidade.",
		tags: ["ficcao", "aventura", "misterio", "suspense", "solo", "emocao"]
	},
	{
		id: "carros-3",
		titulo: "Carros 3",
		categoria: "Animação",
		imagem: "CARS 3 _ In theaters June 16, 2017 (1).jpg",
		descricao: "Relâmpago McQueen encara uma nova geração de corredores e o tecnológico Jackson Storm.",
		tags: ["animacao", "comedia", "diversao", "familia", "aventura", "grupo"]
	},
	{
		id: "acontecimentos-raros",
		titulo: "Acontecimentos Raros",
		categoria: "Drama",
		imagem: "acontecimentos raros acima.jpg",
		descricao: "Histórias sobre relações familiares, afeto cotidiano e a transição entre infância e maturidade.",
		tags: ["drama", "familia", "emocao", "companhia-especial", "solo"]
	}
];

const criterios = [
	{
		"Ação": ["acao"],
		"Terror": ["suspense", "acao"],
		"Mistério": ["misterio", "suspense", "ficcao"],
		"Romance": ["emocao", "drama", "familia"],
		"Comédia": ["comedia", "diversao"],
		"Anime / animação": ["anime", "animacao"]
	},
	{
		"Sozinho(a), curtindo meu momento": ["solo"],
		"Com alguém especial": ["companhia-especial"],
		"Com amigos ou família": ["familia", "grupo"]
	},
	{
		"Suspense e mistério": ["suspense", "misterio"],
		"Romance e emoção": ["emocao", "drama"],
		"Leveza e boas risadas": ["comedia", "diversao"],
		"Aventura e adrenalina": ["aventura", "adrenalina", "acao"]
	},
	{
		"Ficar tentando desvendar tudo": ["misterio", "suspense"],
		"Me emocionar com uma história": ["emocao", "drama"],
		"Desligar a cabeça e relaxar": ["familia", "comedia", "diversao"],
		"Ficar na ponta do sofá": ["acao", "adrenalina", "suspense"]
	},
	{
		"Uma investigação cheia de pistas": ["misterio", "suspense"],
		"Um encontro inesperado": ["emocao", "drama", "companhia-especial"],
		"Uma viagem para outro mundo": ["ficcao", "aventura", "anime"],
		"Uma situação divertida do dia a dia": ["comedia", "diversao", "familia"]
	}
];

const perguntaElemento = document.querySelector("#Pergunta");
const opcoesElemento = document.querySelector("#opcoes");
const progressoElemento = document.querySelector("#progresso");
const descricaoElemento = document.querySelector("#descricao");
const resultadoElemento = document.querySelector("#resultado");
const reiniciarBotao = document.querySelector("#reiniciar");

let perguntaAtual = 0;
const respostas = [];

function mostrarPergunta() {
	const pergunta = perguntas[perguntaAtual];
	perguntaElemento.textContent = pergunta.titulo;
	progressoElemento.textContent = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
	opcoesElemento.replaceChildren();

	pergunta.opcoes.forEach((opcao) => {
		const botao = document.createElement("button");
		botao.className = "box";
		botao.type = "button";
		botao.textContent = opcao;
		botao.addEventListener("click", () => selecionarResposta(opcao));
		opcoesElemento.append(botao);
	});
}

function selecionarResposta(resposta) {
	respostas[perguntaAtual] = resposta;
	perguntaAtual += 1;

	if (perguntaAtual < perguntas.length) {
		mostrarPergunta();
		return;
	}

	mostrarResultado();
}

function mostrarResultado() {
	const pontuacoes = catalogo.map((filme) => {
		const pontos = respostas.reduce((total, resposta, indice) => {
			const tagsDaResposta = criterios[indice][resposta] || [];
			const peso = indice === 1 ? 1 : indice === 4 ? 2 : indice === 0 ? 4 : 3;
			return total + tagsDaResposta.filter((tag) => filme.tags.includes(tag)).length * peso;
		}, 0);
		return { filme, pontos };
	}).sort((a, b) => b.pontos - a.pontos);

	const [principal, ...alternativas] = pontuacoes;
	const cartao = document.createElement("article");
	cartao.className = "recommendation-card";

	const imagem = document.createElement("img");
	imagem.src = principal.filme.imagem;
	imagem.alt = principal.filme.titulo;

	const detalhes = document.createElement("div");
	detalhes.className = "recommendation-details";

	const categoria = document.createElement("p");
	categoria.className = "recommendation-category";
	categoria.textContent = principal.filme.categoria;

	const titulo = document.createElement("h2");
	titulo.textContent = principal.filme.titulo;

	const sinopse = document.createElement("p");
	sinopse.textContent = principal.filme.descricao;

	const link = document.createElement("a");
	link.href = `Index.html#${principal.filme.id}`;
	link.textContent = "Ver no catálogo";

	detalhes.append(categoria, titulo, sinopse, link);
	cartao.append(imagem, detalhes);
	resultadoElemento.replaceChildren(cartao);

	if (alternativas.length > 0) {
		const subtitulo = document.createElement("h3");
		subtitulo.className = "alternatives-title";
		subtitulo.textContent = "Outras opções que também combinam";
		const lista = document.createElement("ul");
		lista.className = "alternatives-list";
		alternativas.slice(0, 2).forEach(({ filme }) => {
			const item = document.createElement("li");
			const alternativaLink = document.createElement("a");
			alternativaLink.href = `Index.html#${filme.id}`;
			alternativaLink.textContent = `${filme.titulo} — ${filme.categoria}`;
			item.append(alternativaLink);
			lista.append(item);
		});
		resultadoElemento.append(subtitulo, lista);
	}

	perguntaElemento.textContent = "Sua sessão de hoje está escolhida!";
	progressoElemento.textContent = "Quiz concluído";
	descricaoElemento.textContent = "Analisamos suas respostas e encontramos a melhor combinação no catálogo:";
	opcoesElemento.hidden = true;
	resultadoElemento.hidden = false;
	reiniciarBotao.hidden = false;
}

function reiniciarQuiz() {
	perguntaAtual = 0;
	respostas.length = 0;
	opcoesElemento.hidden = false;
	resultadoElemento.hidden = true;
	resultadoElemento.replaceChildren();
	reiniciarBotao.hidden = true;
	descricaoElemento.textContent = "Responda rapidinho e descubra o clima de filme ideal para hoje.";
	mostrarPergunta();
}

reiniciarBotao.addEventListener("click", reiniciarQuiz);
mostrarPergunta();
