class CompaniesController < ApplicationController

  def index
    @companies = Company.all
    @array = []
    @companies.each do |company|
      productarray = []
      company.products.each do |product|
      productarray << product.product
      end
      @array << {"name": company.title, "products": productarray, "likes": company.like}
    end
    @data = {"companies" => @array }
    respond_to do |format|
     format.html { render }
     format.json { render json: @data}
     format.xml  { render xml:  @com}
    end
  end

end
