class Contract < ApplicationRecord
    validates :buyer_address, :seller_address, :amount, presence: true
end
