
pipeline {
     agent any
    
      stages {
          stage('Clone') {
             steps {
                 echo 'Cloning repo...'
                 checkout scm
              }
           } 
            stage('Bulid Docker Image') {
               steps {
                 script {
                     dockerImage = docker.build("kummarikavya/ci-cd-demo")
                 }
              }
           }
           stage('Push to DockerHub') {
              steps {
               script {
               docker.withRegistry('https://index.docker.io/v1/', 'ci-cd-demo') {
                 dockerImage.push("latest")
              }
           }
        }
     }
     stage('deploy') {
        steps {
          echo 'App would be deployed here!'
         }
       }
    }
  }
