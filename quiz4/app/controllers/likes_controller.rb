class LikesController < ApplicationController

  def create
    @company = Company.find params[:company_id]
    @company.like += 1
    @company.save
    redirect_to companies_path
  end

end
