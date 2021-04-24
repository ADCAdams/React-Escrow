class Contract < ApplicationRecord
    validates :buyer-address, :seller-address, :amount
end
