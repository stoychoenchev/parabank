pipeline {
    agent any

    tools {
        maven 'Maven3'  // Make sure Maven is installed in Jenkins
        jdk 'JDK 17'    // Ensure JDK 17 is installed in Jenkins
    }

    environment {
        TOMCAT_HOME = "C:\\Program Files\\apache-tomcat-10.1.40"  // Tomcat installation path
        WAR_NAME = "parabank.war"  // Name of the WAR file
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Make sure to specify the correct branch (e.g., 'main' or 'master')
                git branch: 'main', url: 'https://github.com/stoychoenchev/parabank.git'
            }
        }

        stage('Build WAR') {
            steps {
                // Run Maven build to generate the WAR file
                bat '"C:\\Program Files\\apache-maven-3.9.9\\bin\\mvn" clean install -DskipTests'
            }
        }

        stage('Deploy to Tomcat') {
            steps {
                script {
                    // Copy the generated WAR file to Tomcat's webapps directory
                    def warPath = "target\\${env.WAR_NAME}"
                    def webappsPath = "${env.TOMCAT_HOME}\\webapps\\parabank.war"
                    bat "copy /Y \"${warPath}\" \"${webappsPath}\""
                }
            }
        }

        stage('Restart Tomcat') {
            steps {
                // Restart Tomcat to deploy the new WAR file
                bat "\"${env.TOMCAT_HOME}\\bin\\shutdown.bat\""
                sleep time: 5, unit: 'SECONDS'  // Wait for Tomcat to shut down
                bat "\"${env.TOMCAT_HOME}\\bin\\startup.bat\""  // Restart Tomcat
            }
        }
    }

    post {
        success {
            echo '✅ Parabank deployed and Tomcat restarted successfully!'
        }
        failure {
            echo '❌ Deployment failed. Check the logs.'
        }
    }
}
