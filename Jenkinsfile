pipeline{
    agent any
    environment{
        USERNAME = 'tejasvijain09'
        REPO_NAME = 'etpq2'
    }
    stages{
        stage('Checkout source code'){
            steps{
                git branch: 'main',
                    url: 'https://github.com/tejasvijain09/etpq2.git'
            }
        }
        stage('Build Docker Image'){
            steps{
                sh 'docker build -t tejasvijain09/etpq2:v1 .'
            }
        }
        stage('Login to Docker Hub'){
            steps{
                sh 'docker login -u tejasvijain09'
            }
        }
        stage('Push to Docker Hub'){
            steps{
                sh 'docker push tejasvijain09/etpq2:v1'
            }
        }
    }
}