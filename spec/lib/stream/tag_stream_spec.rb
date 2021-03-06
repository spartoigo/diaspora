require 'spec_helper'
require File.join(Rails.root, 'spec', 'shared_behaviors', 'stream')

describe TagStream do
  before do
    @stream = TagStream.new(Factory(:user), :max_time => Time.now, :order => 'updated_at')
    @stream.stub(:tag_string).and_return("foo")
  end

  describe 'shared behaviors' do
    it_should_behave_like 'it is a stream'
  end


  describe 'posts' do
    it 'explains the query' do
      puts @stream.posts.to_sql
    end
  end
end
