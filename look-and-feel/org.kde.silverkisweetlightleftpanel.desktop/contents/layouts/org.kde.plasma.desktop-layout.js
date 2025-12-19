loadTemplate("org.kde.silver.plasma.desktop.leftPanel");

const kwinConfig = ConfigFile('kwinrc');
kwinConfig.group = 'Effect-overview';
kwinConfig.writeEntry('BorderActivate', '5'); //overview all desktops bottom-left
