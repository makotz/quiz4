class AddLikeColumnToCompanies < ActiveRecord::Migration
  def change
    add_column :companies, :like, :Integer
  end
end
