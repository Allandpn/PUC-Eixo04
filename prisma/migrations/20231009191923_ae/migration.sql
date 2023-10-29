-- CreateTable
CREATE TABLE "admins" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "alunos" (
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
    "anotacoesAluno" TEXT
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
    "nomeInstrumento" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "instrumentos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeInstrumento" TEXT NOT NULL,
    "marcaInstrumento" TEXT NOT NULL,
    "estadoConservacaoDoInstrumento" TEXT NOT NULL,
    "isEmprestado" BOOLEAN
);

-- CreateTable
CREATE TABLE "emprestimoinstrumento" (
    "instrumentoId" INTEGER NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "dataInicialEmprestimo" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "dataFinalEmprestimo" DATETIME,

    PRIMARY KEY ("instrumentoId", "alunoId"),
    CONSTRAINT "emprestimoinstrumento_instrumentoId_fkey" FOREIGN KEY ("instrumentoId") REFERENCES "instrumentos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "emprestimoinstrumento_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "alunos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "cursos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeCurso" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "turmas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nroAlunos" INTEGER DEFAULT 0,
    "nome" TEXT NOT NULL,
    "isAtiva" BOOLEAN,
    "horario" TEXT NOT NULL,
    "cursoId" TEXT,
    "coordenadorId" INTEGER,
    CONSTRAINT "turmas_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "cursos" ("nomeCurso") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "turmas_coordenadorId_fkey" FOREIGN KEY ("coordenadorId") REFERENCES "coordenadores" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "unidades" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "diasdasemana" (
    "diaDaSemanaInt" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "diaDaSemanaString" TEXT NOT NULL
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
    "unidadeId" INTEGER,
    "alunoId" INTEGER,
    "coordenadorId" INTEGER,
    CONSTRAINT "enderecos_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "unidades" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "enderecos_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "alunos" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "enderecos_coordenadorId_fkey" FOREIGN KEY ("coordenadorId") REFERENCES "coordenadores" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "contribuicoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataContribuicao" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "valorContribuicao" DECIMAL NOT NULL,
    "alunoId" INTEGER NOT NULL,
    CONSTRAINT "contribuicoes_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "alunos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_AlunoToTurma" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_AlunoToTurma_A_fkey" FOREIGN KEY ("A") REFERENCES "alunos" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AlunoToTurma_B_fkey" FOREIGN KEY ("B") REFERENCES "turmas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CoordenadorToTiposDeInstrumento" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CoordenadorToTiposDeInstrumento_A_fkey" FOREIGN KEY ("A") REFERENCES "coordenadores" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CoordenadorToTiposDeInstrumento_B_fkey" FOREIGN KEY ("B") REFERENCES "tiposdeinstrumentos" ("nomeInstrumento") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CursoToTiposDeInstrumento" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CursoToTiposDeInstrumento_A_fkey" FOREIGN KEY ("A") REFERENCES "cursos" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CursoToTiposDeInstrumento_B_fkey" FOREIGN KEY ("B") REFERENCES "tiposdeinstrumentos" ("nomeInstrumento") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_DiaDaSemanaToTurma" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_DiaDaSemanaToTurma_A_fkey" FOREIGN KEY ("A") REFERENCES "diasdasemana" ("diaDaSemanaInt") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DiaDaSemanaToTurma_B_fkey" FOREIGN KEY ("B") REFERENCES "turmas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "alunos_email_key" ON "alunos"("email");

-- CreateIndex
CREATE UNIQUE INDEX "coordenadores_email_key" ON "coordenadores"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tiposdeinstrumentos_nomeInstrumento_key" ON "tiposdeinstrumentos"("nomeInstrumento");

-- CreateIndex
CREATE UNIQUE INDEX "cursos_nomeCurso_key" ON "cursos"("nomeCurso");

-- CreateIndex
CREATE UNIQUE INDEX "turmas_nome_key" ON "turmas"("nome");

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

-- CreateIndex
CREATE UNIQUE INDEX "_AlunoToTurma_AB_unique" ON "_AlunoToTurma"("A", "B");

-- CreateIndex
CREATE INDEX "_AlunoToTurma_B_index" ON "_AlunoToTurma"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CoordenadorToTiposDeInstrumento_AB_unique" ON "_CoordenadorToTiposDeInstrumento"("A", "B");

-- CreateIndex
CREATE INDEX "_CoordenadorToTiposDeInstrumento_B_index" ON "_CoordenadorToTiposDeInstrumento"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CursoToTiposDeInstrumento_AB_unique" ON "_CursoToTiposDeInstrumento"("A", "B");

-- CreateIndex
CREATE INDEX "_CursoToTiposDeInstrumento_B_index" ON "_CursoToTiposDeInstrumento"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DiaDaSemanaToTurma_AB_unique" ON "_DiaDaSemanaToTurma"("A", "B");

-- CreateIndex
CREATE INDEX "_DiaDaSemanaToTurma_B_index" ON "_DiaDaSemanaToTurma"("B");
