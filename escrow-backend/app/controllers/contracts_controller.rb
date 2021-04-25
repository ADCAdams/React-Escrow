class ContractsController < ApplicationController

    def index
        @contracts = Contract.all
        render json: @contracts
      end
  
      def create
        @contract = Contract.new(contract_params)
        if @contract.save
          render json: @contract
        else
          render json: {error: 'Error creating contract'}
        end
      end
  
      def show
        @contract = Contract.find(params[:id])
        render json: @contract
      end
  
      def destroy
        @contract = Contract.find(params[:id])
        @contract.destroy
      end
  
    #   def update
    #     @contract = Contract.find(params[:id])
    #     @contract.update(name: params["contract"]["name"])
    #     @contract.save
    #     render json: @contract
    #   end
  
      private
  
      def contract_params
        params.require(:contract).permit(:buyer_address, :seller_address, :amount)
      end


end
