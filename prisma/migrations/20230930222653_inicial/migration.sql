-- CreateTable
CREATE TABLE "admins" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "senha" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "dataAdmissao" DATETIME,
    "dataDesligamento" DATETIME,
    "nomeResponsavel" TEXT,
    "telefoneResponsavel" TEXT,
    "emailResponsavel" TEXT,
    "anotacoesAluno" TEXT,
    "turmaId" INTEGER NOT NULL,
    CONSTRAINT "usuarios_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "turmas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "coordenadores" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL,
    "salario" DECIMAL,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "tiposdeinstrumentos" (
    "nomeInstrumento" TEXT NOT NULL,
    "coordenadorId" INTEGER NOT NULL,
    "cursoId" INTEGER NOT NULL,
    CONSTRAINT "tiposdeinstrumentos_coordenadorId_fkey" FOREIGN KEY ("coordenadorId") REFERENCES "coordenadores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tiposdeinstrumentos_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "cursos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "instrumentos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeInstrumento" TEXT NOT NULL,
    "marcaInstrumento" TEXT NOT NULL,
    "estadoConservacaoDoInstrumento" TEXT NOT NULL,
    "isEmprestado" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "emprestimoinstrumento" (
    "instrumentoId" INTEGER NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "dataInicialEmprestimo" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "dataFinalEmprestimo" DATETIME,

    PRIMARY KEY ("instrumentoId", "alunoId"),
    CONSTRAINT "emprestimoinstrumento_instrumentoId_fkey" FOREIGN KEY ("instrumentoId") REFERENCES "instrumentos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "emprestimoinstrumento_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "cursos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeCurso" TEXT NOT NULL,
    "turmaId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "turmas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nroAlunos" INTEGER NOT NULL DEFAULT 0,
    "isAtiva" BOOLEAN NOT NULL,
    "horario" TEXT NOT NULL,
    "cursoId" INTEGER NOT NULL,
    "coordenadorId" INTEGER NOT NULL,
    CONSTRAINT "turmas_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "cursos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "turmas_coordenadorId_fkey" FOREIGN KEY ("coordenadorId") REFERENCES "coordenadores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "unidades" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "diasdasemana" (
    "turmaId" INTEGER,
    "diaDaSemanaInt" INTEGER NOT NULL,
    "diaDaSemanaString" TEXT NOT NULL,
    CONSTRAINT "diasdasemana_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "turmas" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "enderecos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT,
    "bairro" TEXT,
    "cidade" TEXT NOT NULL,
    "CEP" TEXT NOT NULL,
    "unidadeId" INTEGER NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "coordenadorId" INTEGER NOT NULL,
    CONSTRAINT "enderecos_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "unidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "enderecos_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "enderecos_coordenadorId_fkey" FOREIGN KEY ("coordenadorId") REFERENCES "coordenadores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "contribuicoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataContribuicao" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "valorContribuicao" DECIMAL NOT NULL,
    "alunoId" INTEGER NOT NULL,
    CONSTRAINT "contribuicoes_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "coordenadores_email_key" ON "coordenadores"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tiposdeinstrumentos_nomeInstrumento_key" ON "tiposdeinstrumentos"("nomeInstrumento");

-- CreateIndex
CREATE UNIQUE INDEX "cursos_nomeCurso_key" ON "cursos"("nomeCurso");

-- CreateIndex
CREATE UNIQUE INDEX "diasdasemana_diaDaSemanaInt_key" ON "diasdasemana"("diaDaSemanaInt");

-- CreateIndex
CREATE UNIQUE INDEX "diasdasemana_diaDaSemanaString_key" ON "diasdasemana"("diaDaSemanaString");

-- CreateIndex
CREATE UNIQUE INDEX "enderecos_unidadeId_key" ON "enderecos"("unidadeId");

-- CreateIndex
CREATE UNIQUE INDEX "enderecos_alunoId_key" ON "enderecos"("alunoId");

-- CreateIndex
CREATE UNIQUE INDEX "enderecos_coordenadorId_key" ON "enderecos"("coordenadorId");
