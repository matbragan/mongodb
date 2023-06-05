// nome_fantasia
db.growth.updateMany(
    { 'nome_fantasia': { $exists: true ,$in: ['', '""', [], {}, null] } },
    { $unset: { 'nome_fantasia': 1 } }
);

// motivo_situacao
db.growth.updateMany(
    { 'motivo_situacao': { $exists: true ,$in: ['', '""', [], {}, null] } },
    { $unset: { 'motivo_situacao': 1 } }
);

// situacao_especial
db.growth.updateMany(
    { 'situacao_especial': { $exists: true ,$in: ['', '""', [], {}, null] } },
    { $unset: { 'situacao_especial': 1 } }
);

// data_situacao_especial
db.growth.updateMany(
    { 'data_situacao_especial': { $exists: true ,$in: ['', '""', [], {}, null] } },
    { $unset: { 'data_situacao_especial': 1 } }
);

// cidade_exterior
db.growth.updateMany(
    { 'cidade_exterior': { $exists: true ,$in: ['', '""', [], {}, null] } },
    { $unset: { 'cidade_exterior': 1 } }
);

// complemento
db.growth.updateMany(
    { 'complemento': { $exists: true ,$in: ['', '""', [], {}, null] } },
    { $unset: { 'complemento': 1 } }
);

// celular
db.growth.updateMany(
    { 'celular': { $exists: true ,$in: ['', '""', [], {}, null] } },
    { $unset: { 'celular': 1 } }
);

// telefone2
db.growth.updateMany(
    { 'telefone2': { $exists: true ,$in: ['', '""', [], {}, null] } },
    { $unset: { 'telefone2': 1 } }
);

// cnae_secundario
db.growth.updateMany(
    { 'cnae_secundario': { $exists: true ,$in: ['', '""', [], {}, null] } },
    { $unset: { 'cnae_secundario': 1 } }
);
