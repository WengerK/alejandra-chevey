require 'fileutils'

namespace :styleguide do
  desc "Build assets locally from current repo"
  task :build do
    run_locally do
      execute 'yarn', '--check-files', '--no-progress', '--silent'

      # Build the styleguide localy
      execute 'yarn', 'build', '--production'
    end
  end
end
