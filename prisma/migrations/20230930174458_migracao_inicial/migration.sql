-- CreateTable
CREATE TABLE `admins` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `dataNascimento` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `admins_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `dataNascimento` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `usuarios_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `coordenadores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `dataNascimento` DATETIME(3) NOT NULL,
    `salario` DECIMAL(65, 30) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `coordenadores_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tiposdeinstrumentos` (
    `nomeInstrumento` VARCHAR(191) NOT NULL,
    `coordenadorId` INTEGER NOT NULL,

    UNIQUE INDEX `tiposdeinstrumentos_nomeInstrumento_key`(`nomeInstrumento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `instrumentos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeInstrumento` VARCHAR(191) NOT NULL,
    `marcaInstrumento` VARCHAR(191) NOT NULL,
    `estadoConservacaoDoInstrumento` VARCHAR(191) NOT NULL,
    `isEmprestado` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmprestimoInstrumento` (
    `instrumentoId` INTEGER NOT NULL,
    `alunoId` INTEGER NOT NULL,
    `dataInicialEmprestimo` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dataFinalEmprestimo` DATETIME(3) NULL,

    PRIMARY KEY (`instrumentoId`, `alunoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tiposdeinstrumentos` ADD CONSTRAINT `tiposdeinstrumentos_coordenadorId_fkey` FOREIGN KEY (`coordenadorId`) REFERENCES `coordenadores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmprestimoInstrumento` ADD CONSTRAINT `EmprestimoInstrumento_instrumentoId_fkey` FOREIGN KEY (`instrumentoId`) REFERENCES `instrumentos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmprestimoInstrumento` ADD CONSTRAINT `EmprestimoInstrumento_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
