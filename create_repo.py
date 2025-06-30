#!/usr/bin/env python3
"""
Script para criar repositório no GitHub automaticamente
"""

import requests
import json
import os
import subprocess
import sys

def create_github_repo():
    # Configurações
    username = "flaviofagundespro"
    repo_name = "assistente-ia-whatsapp"
    
    # URL da API do GitHub
    url = f"https://api.github.com/user/repos"
    
    # Dados do repositório
    repo_data = {
        "name": repo_name,
        "description": "Landing page moderna para assistente de IA que automatiza atendimento no WhatsApp para terapeutas e advogados",
        "private": False,
        "has_issues": True,
        "has_wiki": True,
        "has_downloads": True,
        "auto_init": False
    }
    
    print(f"🚀 Criando repositório: {username}/{repo_name}")
    print("📝 Aguarde...")
    
    try:
        # Fazer requisição para criar o repositório
        response = requests.post(
            url,
            headers={
                "Accept": "application/vnd.github.v3+json",
                "User-Agent": "Python/requests"
            },
            data=json.dumps(repo_data)
        )
        
        if response.status_code == 201:
            print("✅ Repositório criado com sucesso!")
            print(f"🔗 URL: https://github.com/{username}/{repo_name}")
            
            # Configurar git e fazer push
            setup_git_and_push(username, repo_name)
            
        elif response.status_code == 401:
            print("❌ Erro: Não autorizado. Você precisa estar logado no GitHub.")
            print("💡 Solução: Acesse https://github.com e faça login")
            
        elif response.status_code == 422:
            print("❌ Erro: Repositório já existe ou nome inválido")
            print(f"💡 Verifique: https://github.com/{username}/{repo_name}")
            
        else:
            print(f"❌ Erro: {response.status_code}")
            print(f"📄 Resposta: {response.text}")
            
    except Exception as e:
        print(f"❌ Erro ao criar repositório: {e}")
        print("💡 Tente criar manualmente no GitHub.com")

def setup_git_and_push(username, repo_name):
    """Configurar git e fazer push"""
    try:
        # Adicionar remote
        print("🔧 Configurando git...")
        subprocess.run([
            "git", "remote", "add", "origin", 
            f"https://github.com/{username}/{repo_name}.git"
        ], check=True)
        
        # Renomear branch para main
        subprocess.run(["git", "branch", "-M", "main"], check=True)
        
        # Fazer push
        print("📤 Fazendo push para o GitHub...")
        subprocess.run([
            "git", "push", "-u", "origin", "main"
        ], check=True)
        
        print("🎉 Sucesso! Repositório criado e código enviado!")
        print(f"🌐 Acesse: https://github.com/{username}/{repo_name}")
        
    except subprocess.CalledProcessError as e:
        print(f"❌ Erro no git: {e}")
        print("💡 Execute manualmente:")
        print(f"   git remote add origin https://github.com/{username}/{repo_name}.git")
        print("   git branch -M main")
        print("   git push -u origin main")

if __name__ == "__main__":
    create_github_repo() 