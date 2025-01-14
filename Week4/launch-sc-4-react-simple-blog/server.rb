require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/json"
require "json"
require "pry" if development? || test?

# You should not need to change the code in this file

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")
set :views, File.dirname(__FILE__) + "/views"

# GET ARTICLES FROM ARTICLES.JSON
def read_articles
  JSON.parse(File.read("articles.json"))
end

# standard routes
get "/" do
  erb :home
end

get "/articles/:id" do
  erb :home
end

# API ENDPOINTS
get "/api/v1/articles" do
  articles = read_articles
  # read_articles returns an array of articles stored in `articles.json`

  content_type :json
  json articles
end

get "/api/v1/articles/:id" do
  # this route returns an article has/object given a specific id
  articles = read_articles

  article = articles.find do |article|
    article["id"] == params[:id].to_i
  end

  content_type :json
  json article
end

post "/api/v1/articles" do
  current_articles = read_articles

  article = JSON.parse(request.body.read)
  article["id"] = current_articles.last["id"] + 1

  current_articles << article
  File.write("articles.json", JSON.pretty_generate(current_articles))

  content_type :json
  status 201
  json article
end

# Sinatra wildcard route
get "*" do
  erb :home
end
