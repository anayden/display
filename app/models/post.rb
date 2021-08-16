class Post < ApplicationRecord
  belongs_to :component
  has_many :components
end
