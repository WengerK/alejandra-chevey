namespace :load do
  task :defaults do
    set :app_path, 'public'
  end
end

namespace :hugo do
  desc "Build hugo locally from current repo"
  task :build do
    run_locally do
      execute 'hugo'
    end
  end

  desc "Push :app_path to server"
  task :deploy do
    on roles(:web) do
      from = fetch(:app_path)
      to = release_path.join(fetch(:app_path))
      info "Upload from local: \e[35m#{from}\e[0m to remote \e[35m#{to}\e[0m"
      upload! from, to, recursive: true
    end
  end
end
