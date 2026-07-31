var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BaseMunicpiosdoParan_1 = new ol.format.GeoJSON();
var features_BaseMunicpiosdoParan_1 = format_BaseMunicpiosdoParan_1.readFeatures(json_BaseMunicpiosdoParan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaseMunicpiosdoParan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaseMunicpiosdoParan_1.addFeatures(features_BaseMunicpiosdoParan_1);
var lyr_BaseMunicpiosdoParan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaseMunicpiosdoParan_1, 
                style: style_BaseMunicpiosdoParan_1,
                popuplayertitle: 'Base Municípios do Paraná',
                interactive: true,
                title: '<img src="styles/legend/BaseMunicpiosdoParan_1.png" /> Base Municípios do Paraná'
            });
var format_AssessoradosemguaeEsgoto_2 = new ol.format.GeoJSON();
var features_AssessoradosemguaeEsgoto_2 = format_AssessoradosemguaeEsgoto_2.readFeatures(json_AssessoradosemguaeEsgoto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AssessoradosemguaeEsgoto_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AssessoradosemguaeEsgoto_2.addFeatures(features_AssessoradosemguaeEsgoto_2);
var lyr_AssessoradosemguaeEsgoto_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AssessoradosemguaeEsgoto_2, 
                style: style_AssessoradosemguaeEsgoto_2,
                popuplayertitle: 'Assessorados em Água e Esgoto',
                interactive: true,
                title: '<img src="styles/legend/AssessoradosemguaeEsgoto_2.png" /> Assessorados em Água e Esgoto'
            });
var format_AssessoradosemGestodeResduos_3 = new ol.format.GeoJSON();
var features_AssessoradosemGestodeResduos_3 = format_AssessoradosemGestodeResduos_3.readFeatures(json_AssessoradosemGestodeResduos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AssessoradosemGestodeResduos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AssessoradosemGestodeResduos_3.addFeatures(features_AssessoradosemGestodeResduos_3);
var lyr_AssessoradosemGestodeResduos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AssessoradosemGestodeResduos_3, 
                style: style_AssessoradosemGestodeResduos_3,
                popuplayertitle: 'Assessorados em Gestão de Resíduos',
                interactive: true,
                title: '<img src="styles/legend/AssessoradosemGestodeResduos_3.png" /> Assessorados em Gestão de Resíduos'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BaseMunicpiosdoParan_1.setVisible(true);lyr_AssessoradosemguaeEsgoto_2.setVisible(true);lyr_AssessoradosemGestodeResduos_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BaseMunicpiosdoParan_1,lyr_AssessoradosemguaeEsgoto_2,lyr_AssessoradosemGestodeResduos_3];
lyr_BaseMunicpiosdoParan_1.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'AREA_KM2': 'AREA_KM2', });
lyr_AssessoradosemguaeEsgoto_2.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'AREA_KM2': 'AREA_KM2', });
lyr_AssessoradosemGestodeResduos_3.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'AREA_KM2': 'AREA_KM2', });
lyr_BaseMunicpiosdoParan_1.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIAO': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCURB': 'TextEdit', 'NM_CONCURB': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_AssessoradosemguaeEsgoto_2.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIAO': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCURB': 'TextEdit', 'NM_CONCURB': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_AssessoradosemGestodeResduos_3.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIAO': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCURB': 'TextEdit', 'NM_CONCURB': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_BaseMunicpiosdoParan_1.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIAO': 'no label', 'NM_REGIAO': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCURB': 'no label', 'NM_CONCURB': 'no label', 'AREA_KM2': 'no label', });
lyr_AssessoradosemguaeEsgoto_2.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'header label - always visible', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIAO': 'no label', 'NM_REGIAO': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCURB': 'no label', 'NM_CONCURB': 'no label', 'AREA_KM2': 'no label', });
lyr_AssessoradosemGestodeResduos_3.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'header label - always visible', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIAO': 'no label', 'NM_REGIAO': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCURB': 'no label', 'NM_CONCURB': 'no label', 'AREA_KM2': 'no label', });
lyr_AssessoradosemGestodeResduos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});