class SongsController < ApplicationController
  before_action :set_song, only: %i[show update destroy]
  before_action :authorize_request, only: %i[create update destroy]
  # GET /songs
  def index
    @songs = Song.all

    render json: @songs
  end

  # GET /songs/1
  def show
    render json: @song, include: :genre, status: :ok
  end

  # POST /songs
  def create
    @song = Song.new(song_params)
    @song.user = @current_user
    if @song.save
      render json: @song, status: :created
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /songs/1
  def update
    if @song.update(song_params)
      render json: @song
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  # DELETE /songs/1
  def destroy
    @song.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_song
    @song = Song.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def song_params
    params.require(:song).permit(:name, :img_url, :year, :genre_id, :user_id, :buy, :description, :artist, :price)
  end
end
