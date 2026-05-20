# Sync JARs - Copia arquivos .JAR da pasta games/ para o emulador freej2me-web
# Execute este script apos adicionar novos jogos

$gamesDir = Join-Path $PSScriptRoot "games"
$jarDir = Join-Path $PSScriptRoot "lib\freej2me-web\web\jar"

if (-not (Test-Path $jarDir)) {
    New-Item -ItemType Directory -Path $jarDir -Force | Out-Null
}

$jarFiles = Get-ChildItem -Path $gamesDir -Recurse -Filter "*.jar"
$copied = 0

foreach ($jar in $jarFiles) {
    $gameFolder = $jar.Directory.Name
    $destPath = Join-Path $jarDir "$gameFolder.jar"
    Copy-Item -Path $jar.FullName -Destination $destPath -Force
    Write-Host "Copiado: $($jar.Name) -> $gameFolder.jar"
    $copied++
}

Write-Host "`nTotal: $copied arquivo(s) sincronizado(s)"
