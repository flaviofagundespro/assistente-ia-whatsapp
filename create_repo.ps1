# Script PowerShell para criar repositório no GitHub
# Execute este script no PowerShell

$username = "flaviofagundespro"
$repoName = "assistente-ia-whatsapp"

Write-Host "🚀 Criando repositório: $username/$repoName" -ForegroundColor Green

# Dados do repositório
$repoData = @{
    name = $repoName
    description = "Landing page moderna para assistente de IA que automatiza atendimento no WhatsApp para terapeutas e advogados"
    private = $false
    has_issues = $true
    has_wiki = $true
    has_downloads = $true
    auto_init = $false
} | ConvertTo-Json

try {
    # Criar repositório via API do GitHub
    $response = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method Post -Body $repoData -ContentType "application/json" -Headers @{
        "Accept" = "application/vnd.github.v3+json"
        "User-Agent" = "PowerShell"
    }
    
    Write-Host "✅ Repositório criado com sucesso!" -ForegroundColor Green
    Write-Host "🔗 URL: https://github.com/$username/$repoName" -ForegroundColor Cyan
    
    # Configurar git
    Write-Host "🔧 Configurando git..." -ForegroundColor Yellow
    git remote add origin "https://github.com/$username/$repoName.git"
    git branch -M main
    git push -u origin main
    
    Write-Host "🎉 Sucesso! Repositório criado e código enviado!" -ForegroundColor Green
    Write-Host "🌐 Acesse: https://github.com/$username/$repoName" -ForegroundColor Cyan
    
} catch {
    Write-Host "❌ Erro ao criar repositório:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    
    if ($_.Exception.Response.StatusCode -eq 401) {
        Write-Host "💡 Você precisa estar logado no GitHub" -ForegroundColor Yellow
        Write-Host "🌐 Acesse: https://github.com e faça login" -ForegroundColor Cyan
    } elseif ($_.Exception.Response.StatusCode -eq 422) {
        Write-Host "💡 Repositório já existe ou nome inválido" -ForegroundColor Yellow
        Write-Host "🔍 Verifique: https://github.com/$username/$repoName" -ForegroundColor Cyan
    }
    
    Write-Host "💡 Execute manualmente:" -ForegroundColor Yellow
    Write-Host "   git remote add origin https://github.com/$username/$repoName.git" -ForegroundColor Gray
    Write-Host "   git branch -M main" -ForegroundColor Gray
    Write-Host "   git push -u origin main" -ForegroundColor Gray
} 