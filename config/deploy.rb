# config valid only for current version of Capistrano
lock '3.5.0'

set :application, 'alejandra-chevey'
set :repo_url, 'git@github.com:WengerK/alejandra-chevey.git'

server 'web569.webfaction.com', user: 'alwen', roles: %w{app db web}

set :app_path, "public"

# Specific Webfaction
set :tmp_dir, "/home/alwen/tmp"

# Default value for :scm is :git
set :scm, :git

# Default value for :pty is false
# set :pty, true

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
set :log_level, :debug

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
set :keep_releases, 3

namespace :deploy do
  after :updated, "styleguide:build"
  after :updated, "hugo:build"
  after :updated, "hugo:deploy"

  before :cleanup, :fix_permission do
    on roles(:app) do
      releases = capture(:ls, '-xtr', releases_path).split
      if releases.count >= fetch(:keep_releases)
        directories = (releases - releases.last(fetch(:keep_releases)))
        if directories.any?
          directories_str = directories.map do |release|
            releases_path.join(release)
          end.join(" ")
          execute :chmod, '-R' ,'ug+w', directories_str
        end
      end
    end
  end
end
