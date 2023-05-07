-- CreateTable
CREATE TABLE "Ingreso" (
    "id_ingreso" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "tipoIngresoId_tipo_ingreso" INTEGER NOT NULL,
    "presupuestoId_presupuesto" INTEGER,
    "valorRealId_valor_real" INTEGER,

    CONSTRAINT "Ingreso_pkey" PRIMARY KEY ("id_ingreso")
);

-- CreateTable
CREATE TABLE "Gasto" (
    "id_gasto" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "tipoGastoId_tipo_gasto" INTEGER NOT NULL,
    "presupuestoId_presupuesto" INTEGER,
    "valorRealId_valor_real" INTEGER,

    CONSTRAINT "Gasto_pkey" PRIMARY KEY ("id_gasto")
);

-- CreateTable
CREATE TABLE "Presupuesto" (
    "id_presupuesto" SERIAL NOT NULL,

    CONSTRAINT "Presupuesto_pkey" PRIMARY KEY ("id_presupuesto")
);

-- CreateTable
CREATE TABLE "TipoIngreso" (
    "id_tipo_ingreso" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "TipoIngreso_pkey" PRIMARY KEY ("id_tipo_ingreso")
);

-- CreateTable
CREATE TABLE "TipoGasto" (
    "id_tipo_gasto" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "TipoGasto_pkey" PRIMARY KEY ("id_tipo_gasto")
);

-- CreateTable
CREATE TABLE "ValorReal" (
    "id_valor_real" SERIAL NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3) NOT NULL,
    "metodoObtencionId_metodo_obtencion" INTEGER NOT NULL,

    CONSTRAINT "ValorReal_pkey" PRIMARY KEY ("id_valor_real")
);

-- CreateTable
CREATE TABLE "MetodoObtencion" (
    "id_metodo_obtencion" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "MetodoObtencion_pkey" PRIMARY KEY ("id_metodo_obtencion")
);

-- CreateTable
CREATE TABLE "Periodo" (
    "id_periodo" SERIAL NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3) NOT NULL,
    "valorRealId_valor_real" INTEGER NOT NULL,
    "presupuestoId_presupuesto" INTEGER NOT NULL,

    CONSTRAINT "Periodo_pkey" PRIMARY KEY ("id_periodo")
);

-- AddForeignKey
ALTER TABLE "Ingreso" ADD CONSTRAINT "Ingreso_tipoIngresoId_tipo_ingreso_fkey" FOREIGN KEY ("tipoIngresoId_tipo_ingreso") REFERENCES "TipoIngreso"("id_tipo_ingreso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingreso" ADD CONSTRAINT "Ingreso_presupuestoId_presupuesto_fkey" FOREIGN KEY ("presupuestoId_presupuesto") REFERENCES "Presupuesto"("id_presupuesto") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingreso" ADD CONSTRAINT "Ingreso_valorRealId_valor_real_fkey" FOREIGN KEY ("valorRealId_valor_real") REFERENCES "ValorReal"("id_valor_real") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gasto" ADD CONSTRAINT "Gasto_tipoGastoId_tipo_gasto_fkey" FOREIGN KEY ("tipoGastoId_tipo_gasto") REFERENCES "TipoGasto"("id_tipo_gasto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gasto" ADD CONSTRAINT "Gasto_presupuestoId_presupuesto_fkey" FOREIGN KEY ("presupuestoId_presupuesto") REFERENCES "Presupuesto"("id_presupuesto") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gasto" ADD CONSTRAINT "Gasto_valorRealId_valor_real_fkey" FOREIGN KEY ("valorRealId_valor_real") REFERENCES "ValorReal"("id_valor_real") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ValorReal" ADD CONSTRAINT "ValorReal_metodoObtencionId_metodo_obtencion_fkey" FOREIGN KEY ("metodoObtencionId_metodo_obtencion") REFERENCES "MetodoObtencion"("id_metodo_obtencion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Periodo" ADD CONSTRAINT "Periodo_valorRealId_valor_real_fkey" FOREIGN KEY ("valorRealId_valor_real") REFERENCES "ValorReal"("id_valor_real") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Periodo" ADD CONSTRAINT "Periodo_presupuestoId_presupuesto_fkey" FOREIGN KEY ("presupuestoId_presupuesto") REFERENCES "Presupuesto"("id_presupuesto") ON DELETE RESTRICT ON UPDATE CASCADE;
