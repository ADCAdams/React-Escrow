class CreateContracts < ActiveRecord::Migration[6.0]
  def change
    create_table :contracts do |t|
      t.string :buyer
      t.string :seller
      t.string :buyer-address
      t.string :seller-address
      t.float :amount
      t.boolean :received
      t.boolean :dispursed
      t.string :purchase-object

      t.timestamps
    end
  end
end
