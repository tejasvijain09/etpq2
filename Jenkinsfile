pipeline{
    agent any
    environment{
        USERNAME = tejasvijain09
        REPO_NAME = etpq2
    }
    stages{
        stage('Checkout source code'){
            steps{
                git branch: 'main'
                    url 'https://github.com/${USERNAME}/${REPO_NAME}.git'
            }
        }
        stage('Build Docker Image'){
            steps{
                sh 'docker build -t ${USERNAME}/{REPO_NAME}:v1 .'
            }
        }
        stage('Login to Docker Hub'){
            steps{
                sh 'docker login -u ${USERNAME}'
            }
        }
        stage('Push to Docker Hub'){
            steps{
                sh 'docker push ${USERNAME}/{REPO_NAME}:v1'
            }
        }
    }
}