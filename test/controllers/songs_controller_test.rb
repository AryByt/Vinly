require "test_helper"

class SongsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @song = songs(:one)
  end

  test "should get index" do
    get songs_url, as: :json
    assert_response :success
  end

  test "should create song" do
    assert_difference('Song.count') do
      post songs_url, params: { song: { artist: @song.artist, buy: @song.buy, description: @song.description, genre_id: @song.genre_id, img_url: @song.img_url, name: @song.name, price: @song.price, user_id: @song.user_id, year: @song.year } }, as: :json
    end

    assert_response 201
  end

  test "should show song" do
    get song_url(@song), as: :json
    assert_response :success
  end

  test "should update song" do
    patch song_url(@song), params: { song: { artist: @song.artist, buy: @song.buy, description: @song.description, genre_id: @song.genre_id, img_url: @song.img_url, name: @song.name, price: @song.price, user_id: @song.user_id, year: @song.year } }, as: :json
    assert_response 200
  end

  test "should destroy song" do
    assert_difference('Song.count', -1) do
      delete song_url(@song), as: :json
    end

    assert_response 204
  end
end
