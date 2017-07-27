# staging.alejandra-chevey.ch
set :deploy_to, '/home/alwen/www/staging.alejandra-chevey.ch'

# set a branch for this release
set :branch, 'dev'

# Protect the staging with a password
set :http_auth_users, [
   [ "alejandra-chevey", "$apr1$vHMguZuD$ZD0IeqhM0Ioypda9rIdf./" ]
]

after "deploy:finished", "httpauth:protect"
