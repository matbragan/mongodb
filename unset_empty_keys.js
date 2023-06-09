// nome_fantasia
db.chaseio.updateMany(
    { 'nome_fantasia': { $exists: true ,$in: ['', '""', [], {}, null] } },
    { $unset: { 'nome_fantasia': 1 } }
);

// motivo_situacao
db.chaseio.updateMany(
    { 'motivo_situacao': { $exists: true ,$in: ['', '""', [], {}, null] } },
    { $unset: { 'motivo_situacao': 1 } }
);

// situacao_especial
db.chaseio.updateMany(
    { 'situacao_especial': { $exists: true ,$in: ['', '""', [], {}, null] } },
    { $unset: { 'situacao_especial': 1 } }
);

// data_situacao_especial
db.chaseio.updateMany(
    { 'data_situacao_especial': { $exists: true ,$in: ['', '""', [], {}, null] } },
    { $unset: { 'data_situacao_especial': 1 } }
);

// cidade_exterior
db.chaseio.updateMany(
    { 'cidade_exterior': { $exists: true ,$in: ['', '""', [], {}, null] } },
    { $unset: { 'cidade_exterior': 1 } }
);

// complemento
db.chaseio.updateMany(
    { 'complemento': { $exists: true ,$in: ['', '""', [], {}, null] } },
    { $unset: { 'complemento': 1 } }
);

// celular
db.chaseio.updateMany(
    { 'celular': { $exists: true ,$in: ['', '""', [], {}, null] } },
    { $unset: { 'celular': 1 } }
);

// telefone2
db.chaseio.updateMany(
    { 'telefone2': { $exists: true ,$in: ['', '""', [], {}, null] } },
    { $unset: { 'telefone2': 1 } }
);

// cnae_secundario
db.chaseio.updateMany(
    { 'cnae_secundario': { $exists: true ,$in: ['', '""', [], {}, null] } },
    { $unset: { 'cnae_secundario': 1 } }
);
