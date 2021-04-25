class CreateContracts < ActiveRecord::Migration[6.0]
  def change
    create_table :contracts do |t|
      t.string :buyer_address
      t.string :seller_address
      t.string :buyer
      t.string :seller
      t.float :amount
      t.boolean :received
      t.boolean :dispursed
      t.string :purchase_object

      t.timestamps
    end
  end
end
