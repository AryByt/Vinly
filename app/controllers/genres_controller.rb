class GenresController < ApplicationController
  before_action :set_genre, only: %i[show update destroy]

  # GET /genres
  def index
    @genres = Genre.all

    render json: @genres, include: :songs
  end

  # GET /genres/1
  def show
    render json: @genre
  end

  # POST /genres
  def create
    @genre = Genre.new(genre_params)

    if @genre.save
      render json: @genre, status: :created
    else
      render json: @genre.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /genres/1
  def update
    if @genre.update(genre_params)
      render json: @genre
    else
      render json: @genre.errors, status: :unprocessable_entity
    end
  end

  # DELETE /genres/1
  def destroy
    @genre.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_genre
    @genre = Genre.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def genre_params
    params.require(:genre).permit(:name, :title)
  end
end
