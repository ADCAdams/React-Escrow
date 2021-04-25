class ContractSerializer
  include FastJsonapi::ObjectSerializer
  attributes :buyer, :seller, :buyer_address, :seller_address, :aress, :amount, :received, :dispursed, :purchase_object
end
