FactoryBot.define do
  factory :task do
    name
    description
    author factory: :manager
    assignee factory: :developer
    expired_at { 30.days.from_now.to_date }
  end
end
